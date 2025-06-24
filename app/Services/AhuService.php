<?php

namespace App\Services;


use App\Models\Ahu;
use App\Services\BaseService;

class AhuService extends BaseService
{

    protected $model;

    public function __construct()
    {
        $this->model = Ahu::class;
    }

    public function storeOrUpdate($data, $id = null)
    {
        try {
            // Call patent method
            return parent::storeOrUpdate($data, $id);
        } catch (\Exception $e) {
            $this->logFlashThrow($e);
        }
    }
}

