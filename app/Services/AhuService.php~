<?php

namespace App\Services;


use App\Models\Fan;
use App\Services\BaseService;

class FanService extends BaseService
{

    protected $model;

    public function __construct()
    {
        $this->model = Fan::class;
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

