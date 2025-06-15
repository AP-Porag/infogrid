<?php

namespace App\Services;


use App\Models\Information;
use App\Services\BaseService;

class InformationService extends BaseService
{

    protected $model;

    public function __construct()
    {
        $this->model = Information::class;
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

